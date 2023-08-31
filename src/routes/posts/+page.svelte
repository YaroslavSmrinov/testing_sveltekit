<script>
    export let data
    console.log(data.Posts.products)

</script>

<svelte:head>
    <title>Новинки</title>
</svelte:head>
<h1>
    Популярное
</h1>
<div class='lighrooms'>
    {#each data.Posts.products as post}
        <div class="block" align="center">
            <div class="block-card">
                <h1>{post.title}</h1>
                <div><img src="{post.thumbnail}" alt="Thumbnail" />
                <p>Price: ${post.price}</p>
                <p>Discount: {post.discountPercentage}%</p>
                <p>Rating: {post.rating}</p>
                <p>Brand: {post.brand}</p>
                <p>Category: {post.category}</p>
                <button class="button-card"><a href="/posts/{post.id}">Подробнее</a></button>
                
                </div>
            </div>
        </div>
    {/each}
</div>
<style>
    .lighrooms {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
    }
    
    .block-card img{
  width:100%;
  height:200px;
  border-top-left-radius:10px;
  border-top-right-radius:10px;
  
}

.button-card{
 border-style:none;
 background:green;
 border-radius:10px;
 display:block;
 font-size:19px;
 padding:10px;
 font-weight:bold;
 color:#fff;
  margin-top:32px;
   box-shadow: 0 0 15px rgba(0,0,0,3);
 
}
.button-card:hover{
 background:#32cd32;
   
}
.block{
  display: flex;
  background:#777;
  height:100%;
  padding-top:70px;
  padding-bottom:70px;
  
}

.block-card{
 box-shadow: 0 0 30px rgba(0,0,0,0.5);
  border-radius:10px;
  margin-left:15px;
  margin-top:15px;
  display:inline-block;
  width:320px;
  height:550px;
  background-color:white;
}
</style>



















