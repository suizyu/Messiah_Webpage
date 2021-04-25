<template>
    <div class="scroll-guide">
        <span>SCROLL</span>
    </div>
</template>
<style>
    .scroll-guide span {
        position: absolute;
        left: 4px;
        bottom: 25vh;
        color: white;
        font-size: 0.7rem;
        font-family: kinuta-maruminshinano-stdn, serif;
        font-weight: 400;
        font-style: normal;
        letter-spacing: 0.05em;
        -ms-writing-mode: tb-rl;
        -webkit-writing-mode: vertical-rl;
        writing-mode: vertical-rl;
    }

    .scroll-guide {
        position: absolute;
        left:50%;
        bottom:10px;
        height: 35vh;
    }

    .scroll-guide::after {
        content: "";
        position: absolute;
        top: 0;
        width: 1px;
        height: 30px;
        background: white;
        animation: 
            pathmove 1.4s ease-in-out infinite,
            pathmovehide 1.4s ease-out infinite;
    }

    @keyframes pathmove {
        0% {
            height: 0;
            top: -15%;
        }
        30% {
            height:30%;
        }
        100%{
            height: 0;
            top:100%;
        }
    }
    @keyframes pathmovehide {
        0%{opacity:0.8}
        50%{opacity:1;}
        80%{opacity:0.9;}
        100%{opacity:0;}
    }
</style>