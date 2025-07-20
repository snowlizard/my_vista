import { useState, useEffect } from "react";
import bootloader from '../assets/boot/bootloader.gif';
import bootAnimation  from '../assets/boot/bootloader.mp4';
import vista_logon_logo from '../assets/boot/vista_logon_logo.png';
import loading from '../assets/ui/loading.png';
import chime from '../assets/boot/chime.mp3';


// simulate boot sequence using two timeouts
// and switch component after each timeout
// on final boot sequence dispatch action and 
// set bootState to true - booting is done -

export const Bootloader = () => {
    const [scene, setScene] = useState(<></>);
    useEffect( () => {
        setScene(<SceneOne />);

        const timeout = setTimeout( () => {
            new Audio(chime).play();
            setScene(<SceneTwo />);
        }, 4000);

        const timeout2 = setTimeout( () => {
            clearTimeout(timeout);
            setScene(<SceneThree />);
        }, 8000);

        return () => clearTimeout(timeout2);
    }, []);

    const SceneOne = () => (
        <img id="bootloader_pre" src={bootloader} />
    );

    const SceneTwo = () => (
        <video id="bootloader_2nd" width={400} height={400} autoPlay muted>
            <source src={bootAnimation} type="video/mp4"></source>
        </video>
    );

    const SceneThree = () => (
        <div id="bootloader_final">
            <div className="bootWelcome">
                <img id="loadingCircle" src={loading} />
                <span id="boot_text" >Welcome</span>
            </div>
            <img id="bootlogo_bottom" src={vista_logon_logo}></img>
        </div>
    );

    return (
        <div className="bootloader_container">
            { scene }
        </div>
    );
}