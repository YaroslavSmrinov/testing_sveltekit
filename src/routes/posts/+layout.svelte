
<header>
    <input type="checkbox" id="menu-toggle">
    <label for="menu-toggle" id="menu-icon">&#9776;</label>
    <nav id="menu">
        <ul>
        <li><a href="/posts">Главная</a></li>
        <li><a href="/posts">Посты</a></li>
        <li><a href="/seller">Стать продавцом</a></li>
        <li><a href="/posts/about/">About us </a></li>
        </ul>
    </nav>
</header>

<main>
    <slot/>
</main>

<style>
    #menu-toggle {
    display: none;
    }

    #menu-icon {
        font-size: 30px;
        cursor: pointer;
        padding: 15px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
    }

    #menu {
        width: 100%;
        background-color: #333;
        overflow-x: hidden;
        transition: 0.5s;
    }

    #menu ul {
        list-style: none;
        padding: 0;
        margin: 0;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
    }

    #menu li {
        padding: 0 15px;
    }

    #menu a {
        text-decoration: none;
        color: white;
        font-size: 20px;
        transition: 0.3s;
    }

    #menu a:hover {
        color: #f1f1f1;
    }

    #menu-toggle:checked + #menu {
        height: auto;
    }

    @media screen and (max-width: 768px) {
        #menu {
            height: auto;
        }

        #menu ul {
            flex-direction: column;
            align-items: flex-start;
            height: auto;
            display: none;
        }

        #menu-toggle:checked + #menu ul {
            display: flex;
        }
    }
</style>