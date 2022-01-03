<script>
import { text } from "svelte/internal";

</script>
<style>
    main {
        min-height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-top: 3rem;
        padding-bottom: 3rem;
    }
    @media (min-width:640px) {
        main {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
        }
    }
    .title {
        text-align: center;
        margin-left: auto;
        margin-right: auto;
    }
    .menu {
        margin-top: 2rem;
        margin-left: auto;
        margin-right: auto;
        background: white;
        padding: 2.5rem 2rem;
    }
    @media (min-width:640px) {
        .menu {
            max-width: 28rem;
            padding: 1rem 2rem;
            border-radius: .5rem;
            box-shadow: #0000 0px 0px 0px 0px, #0000 0px 0px 0px 0px, #0000001a 0px 1px 3px 0px, #0000000f 0px 1px 2px 0px
        }
    }
    button, [role="button"] {
        display: flex;
        justify-content: center;
        background-color: #fff;
        border-color: #d1d5db;
        border-radius: 6px;
        border-style: solid;
        border-width: 1px;
        box-shadow: #0000 0px 0px 0px 0px, #0000 0px 0px 0px 0px, #0000000d 0px 1px 2px 0px;
        color: #6b7280;
        font-size: 14px;
        justify-content: center;
        line-height: 20px;
        padding: 0.5rem 1rem;
        text-decoration-line: none;
        width: 100%;
        cursor: default;
    }
    [type="submit"] {
        border-color: #4f46e5;
        background-color: #4f46e5;
        color: white;
    }
    label {
        display: block
    }
    input[type="text"] {
        background-color: #fff;
        border-color: #d1d5db;
        border-radius: 6px;
        border-style: solid;
        border-width: 1px;
        box-shadow: #0000 0px 0px 0px 0px, #0000 0px 0px 0px 0px, #0000000d 0px 1px 2px 0px;
        margin-top: .5rem;
        font-size: 14px;
        line-height: 20px;
        padding: 0.5rem 1rem;
        width: 100%;

    }
    .menu>div:not(:first-child) {
        display: flex;
        border-width: 1px 0 0 0;
        border-color: #a5adbd;
        border-style: solid;
    }
    .input-container {
        display: flex;
        margin-bottom: .5rem;

    }
    .menu>div {
        padding-top: .5rem;
        padding-bottom: .5rem;
    }

</style>

<main>
    <div class="title">
        <h1>Play Match Doodle</h1>
    </div>
    <div class="menu">
        <div>
            <label for="game-id">Game ID</label>
            <div class="input-container"><input id="game-id" type="text" placeholder="Game ID" minlength="6" maxlength="6" /></div>
            <button type="submit">Join Game</button>
        </div>
        <div>
            <a role="button" href="/create-game/">Start Game</a>
        </div>
        <div>
            <a role="button" href="/solo/">Play Solo</a>
        </div>
    </div>
</main>
