var MyVideo = document.querySelector("#video");

        function playPause(){
            if (MyVideo.paused)
                MyVideo.play();
            else
                MyVideo.pause();
        }

        function telaCheia(){
            MyVideo.requestFullscreen();
        }

        function ampliar(){
            MyVideo.width = 600;
        }

        function minimizar(){
            MyVideo.width = 300;
        }

        function normal(){
            MyVideo.width = 420;
        }

        function volMais(){
            MyVideo.volume += 0.1;
        }
        function volMenos(){
            MyVideo.volume -= 0.1;
        }
        function Mute(){
            MyVideo.volume = 0;
        }