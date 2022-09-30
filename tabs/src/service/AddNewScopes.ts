import { loginAction } from "../service/login";
import { FxContext } from "../components/singletonContext";
import { ErrorWithCode } from "@microsoft/teamsfx";

export async function addNewScope(addscopes: string[]) {
    let teamsfx = FxContext.getInstance().getTeamsFx();
    try {
        await teamsfx.getCredential().getToken(addscopes);  
    } catch(e) {
        try {
            if (e instanceof ErrorWithCode) await loginAction(addscopes);
        } catch(e) {
            console.log(e);
            throw new Error( "Error: Add New Scope Failed.");
        }
    } 
}