import React, { useEffect } from "react";
import Auth0EditProfileWidget from 'auth0-editprofile-widget'
import config from '../../../config'
import { useAuth0 } from "@auth0/auth0-react";

export function Profile() {
    const { getAccessTokenSilently } = useAuth0();

    useEffect(() => {

        async function init() {
            var editProfileWidget = new Auth0EditProfileWidget('editProfileContainer', { domain: config.auth0.domain }, [
                { label: "Name", type:"text", attribute:"name",
                  validation: function(name){
                      return (name.length > 30 ? 'The name is too long' : null);
                  }
                },
            
                { label: "Lastname", type:"text", attribute:"lastname" },
            
                { label: "BirthDay", type:"date", attribute:"birthday" },
            
                { label: "Type", type:"select", attribute:"account_type",
                  options:[
                    { value: "type_1", text:"Type 1"},
                    { value: "type_2", text:"Type 2"},
                    { value: "type_3", text:"Type 3"}
                  ]
                }
            ]);
            
            let token = await getAccessTokenSilently()
            console.log(token);
            editProfileWidget.init(token);
        }
        
        init();
      }); 

    return <>
        <div id="editProfileContainer"></div>
    </>;
}
