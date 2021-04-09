<template>
    <a href="https://uxdaystokyo.com/articles/glossary/atomic-design/" target="_blank" class="detail-btn">
        <span class="btn-text">More</span>
    </a>
</template>

<style>
    a {
        display: block;
        text-decoration: none;
        font-family: classico-urw, sans-serif;
        font-weight: 500;
        font-style: normal;
    }

    .detail-btn {
        position: relative;
        display: flex;
        font-size: 1.5rem;
        text-align: center;
        border: 1px solid #b0a200;
        margin: 30px auto;
        padding: 10px 0;
        width: 328px;
        line-height: 1;
    }

    .btn-text {
        width: 100%;
        height: 100%;
        color: #b0a200;
        z-index: 2;
    }

    .btn-text:before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        width: 0;
        display: block;
        /* background: linear-gradient(to left, #b0a200 0%, #977b00 100%);; */
        background: #b0a200;
        z-index: -1;
        transition: .3s;
    }

    .btn-text:hover {
        color: #fff;
    }

    .btn-text:hover::before {
        width: 100%;
    }
</style>