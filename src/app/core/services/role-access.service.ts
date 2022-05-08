import { RoleAccess } from "src/app/shared/models/role-access";

export class RoleAccessService {
    
    roleAccessObject : RoleAccess

    public getPermissions(id_role:string, module:string) : RoleAccess {
        this.roleAccessObject = new RoleAccess();
        this.roleAccessObject.id_role = id_role;
        this.roleAccessObject.module = module;        
        switch(module){
          case 'Users': 
              switch (id_role) {
                case '1':
                  this.roleAccessObject.isCreateEnabled = true;
                  this.roleAccessObject.isUpdateEnabled = true;
                  this.roleAccessObject.isDeleteEnabled = true;
                  this.roleAccessObject.isModuleEnabled = true;
                break;
    
                case '2':
                  this.roleAccessObject.isCreateEnabled = true;
                  this.roleAccessObject.isUpdateEnabled = true;
                  this.roleAccessObject.isDeleteEnabled = false;
                  this.roleAccessObject.isModuleEnabled = true;
                break;

                case '3':
                  this.roleAccessObject.isCreateEnabled = false;
                  this.roleAccessObject.isUpdateEnabled = false;
                  this.roleAccessObject.isDeleteEnabled = false;
                  this.roleAccessObject.isModuleEnabled = false;
                break;
              }
            }
            return this.roleAccessObject;
        }
}