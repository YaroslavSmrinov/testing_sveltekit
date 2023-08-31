<script>
    export let data;
</script>

<style>
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
  position:inherit;
  display:block;
  background:#777;
  width:100%;
  height:100%;
  padding-top:70px;
  padding-bottom:70px;
  
}

.block-card{
 box-shadow: 0 0 20px rgba(0,0,0,0.5);
  border-radius:10px;
  margin-left:15px;
  margin-top:15px;
  display:inline-block;
  width:320px;
  height:450px;
  background-color:white;
}

</style>

<div class="block" align="center">
<div class="block-card">
    <div><img src="{data.Post.thumbnail}" alt="Thumbnail" />
    <h1>Product {data.Post.title}</h1>
    <p>ID: {data.Post.id}</p>
    <p>Title: {data.Post.title}</p>
    <p>Description: {data.Post.description}</p>
    <p>Price: ${data.Post.price}</p>
    <p>Discount: {data.Post.discountPercentage}%</p>
    <p>Rating: {data.Post.rating}</p>
    <p>Stock: {data.Post.stock}</p>
    <p>Brand: {data.Post.brand}</p>
    <p>Category: {data.Post.category}</p>
    <button class="button-card">Хочу купить</button>
    <button class="button-card"><a href="/posts/create">Хочу продать</a></button>
    </div>
</div>
</div>