<script>
    export let data;
</script>

<style>
    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 40px 20px;
    }

    h1 {
        font-size: 28px;
        margin-bottom: 20px;
    }

    .user-list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 20px;
    }

    .email-box {
        background-color: #f0f0f0;
        padding: 20px;
        border-radius: 8px;
    }

    .email {
        font-size: 16px;
        margin: 10px 0;
    }
</style>

<div class="container">
    <h1>About Us</h1>
    <div class="user-list">
        {#each data.AllData as user}
            <div class="email-box">
                <p class="email">{user.email}</p>
            </div>
        {/each}
    </div>
</div>

