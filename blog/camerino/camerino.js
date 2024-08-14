const container = document.querySelector('.giraffa');

const renderPosts = async () => {
    let uri = 'http://localhost:3000/posts';

    const res = await fetch(uri);
    const posts = await res.json();
    console.log(posts);

    let template = '';
    posts.forEach(post => {
        template += `
        <div class="post text-white m-20 flex flex-col gap-3">
            <h2>${post.title}</h2>
            <p><small>${post.likes} likes</small></p>
            <p>${post.body.slice(0, 500)}</p>
            <a href="/blog/home/index.html" class="flex justify-end">read more... </a>
        </div>
        `
    });

    container.innerHTML = template;

};

window.addEventListener("DOMContentLoaded", () => renderPosts());