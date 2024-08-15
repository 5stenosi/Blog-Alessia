const container = document.querySelector('.giraffa');

const renderPosts = async () => {
    let uri = 'http://localhost:3000/posts';
    // let uri = 'http://localhost:3000/posts?_sort=-likes';        con il - davanti ordina in modo decrescente

    const res = await fetch(uri);
    const posts = await res.json();
    console.log(posts);

    let template = '';
    posts.forEach(post => {
        template += `
        <div class="post text-white m-20 flex flex-col gap-3">
            <h2 class="text-center">${post.title}</h2>
            <p><small>${post.likes} likes</small></p>
            <p>${post.body.slice(0, 200)}</p>
            <a href="/blog/home/index.html" class="text-end">read more... </a>
        </div>
        `
    });

    container.innerHTML = template;

};

window.addEventListener("DOMContentLoaded", () => renderPosts());