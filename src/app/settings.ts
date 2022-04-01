import { environment } from '../environments/environment';

export class AppSettings {
  public static URIAccessManagement = environment.webApiUrl;  
  public static URIAccessAutentication = environment.webApiAutentication;  
  public static tokenAuthName = environment.cookieName;
  public static version = "1.0.0";
}
