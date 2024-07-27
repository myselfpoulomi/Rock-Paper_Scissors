const gamecontainer = document.querySelector(".container"),

    user_result = document.querySelector(".user_result img"),

    cpu_result = document.querySelector(".cpu_result img"),

    result = document.querySelector(".result"),
    option_img = document.querySelectorAll(".option_img");

option_img.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");

        user_result.src=cpu_result.src="images/rock.jpg";
        result.textContent="wait..."

        option_img.forEach((image2, index2) => {
            index !== index2 && image.classList.remove("active");

        });

        gamecontainer.classList.add ("start");

        let time = setTimeout(() => {
            gamecontainer.classList.remove ("start");
            let imgsrc = e.target.querySelector("img").src;
            user_result.src = imgsrc;

            let randomNumber = Math.floor(Math.random() * 3);

            let cpuImg = ["images/rock.jpg",
                "images/paper.jpg", "images/scissors.jpg"
            ];
            cpu_result.src = cpuImg[randomNumber];

            let cpuValue = ["R", "P", "S"][randomNumber];

            let userValue = ["R", "P", "S"][index];


            let outcomes = {
                RR: "DRAW",
                RP: "CPU",
                RS: "USER",
                PP: "DRAW",
                PR: "USER",
                PS: "CPU",
                SS: "DRAW",
                SR: "CPU",
                SP: "USER"
            };

            let outcomevalue = outcomes[userValue + cpuValue];

            result.textContent = userValue === cpuValue ? "MATCH DRAW" : `${outcomevalue} WON !!`;
        }, 2500);

    });
});