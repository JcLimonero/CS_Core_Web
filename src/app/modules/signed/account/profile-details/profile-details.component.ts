import { Component, EventEmitter, OnInit } from '@angular/core';
import { SessionDataService } from 'src/app/core/services/sessionDataService';
import { FileUploader, FileUploaderOptions, ParsedResponseHeaders } from 'ng2-file-upload';
import { AuthenticationService } from '../../../../core/services/auth.service';
import { DemoFilePickerAdapter } from 'src/app/core/services/demo-file-picker.adapter';
import { HttpClient } from '@angular/common/http';
import { FilePreviewModel, UploaderCaptions, ValidationError } from 'ngx-awesome-uploader';
import { delay, Observable, of } from 'rxjs';
import { NotificationService } from 'src/app/core/services/notification.service';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})


//const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

export class ProfileDetailsComponent implements OnInit {

  public imageProfile = 'assets/user.png';
  public captions: UploaderCaptions = {
    dropzone: {
      title: 'Arrastar el archivo aqui',
      or: 'o',
      browse: 'Busca el archivo'
    },
    cropper: {
      crop: 'Kəs',
      cancel: 'Imtina',
    },
    previewCard: {
      remove: 'Sil',
      uploadError: 'Fayl yüklənmədi',
    },
  };

  fullName: string = "";
  email: string = "";
  alias: string = "";

  editImageProfile = false;

  
  public lastPK: number;
  public uploader:FileUploader = new FileUploader({
    url: URL, 
    disableMultipart:true
    });

    public adapter = new DemoFilePickerAdapter(this.http);

    public hasBaseDropZoneOver:boolean = false;
    public hasAnotherDropZoneOver:boolean = false;  
    fileObject: any;
  
    previewImg: any;
    sanitizer: any;
  
  constructor(
    private sessionDataService: SessionDataService,
    private http: HttpClient,
    private notificationService: NotificationService) {
   
 }
 
  ngOnInit() {
    this.fullName = this.sessionDataService.getCurrentUser(); 
    this.email = this.sessionDataService.getMail();
    this.imageProfile = this.sessionDataService.getImageProfile();
    console.log(this.imageProfile);
  }


  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e; 
  }
 
  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }

  public onFileSelected(event: EventEmitter<File[]>) {
    const file: File = event[0];

    console.log(file);

    this.readBase64(file)
      .then(function(data) {
      console.log(data);
    })

  }

  public uploadSuccess(event): void {
    console.log(event);
  }

  readBase64(file): Promise<any> {
    var reader  = new FileReader();
    var future = new Promise((resolve, reject) => {
      reader.addEventListener("load", function () {
        resolve(reader.result);
      }, false);

      reader.addEventListener("error", function (event) {
        reject(event);
      }, false);

      reader.readAsDataURL(file);
    });
    return future;
  }

  public onRemoveSuccess(e: FilePreviewModel) {
    console.log(e);
  }

  public myCustomValidator(file: File): Observable<boolean> {
    if (!file.name.includes('uploader')) {
      return of(true).pipe(delay(2000));
    }
    // if (file.size > 50) {
    //   return this.http.get('https://vugar.free.beeceptor.com').pipe(map((res) =>  res === 'OK' ));
    // }
    return of(false).pipe(delay(2000));
  }

  public onValidationError(error: ValidationError): void {
    console.log(error)
    alert(`Validation Error ${error.error} in ${error.file.name}`);
  }

  public onUploadSuccess(e: FilePreviewModel): void {
    this.notificationService.OkSnackBar("Imagen actualizada correctamente, favor de refrescar el portal");
    window.location.reload();
  }

  public OnEditImageProfile():void
  {
    this.editImageProfile = true;
    
  }

  public OnCancelImageProfile():void
  {
    this.editImageProfile = false;
  }
}
