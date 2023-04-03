const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCLCkxJvB1JEt9Ba0R7NvgLg&part=snippet%2Cid&order=date&maxResults=6'
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '33d3f2e245msh73f972277af6b3dp1cc0bajsn4b25b6cc999c',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};
const cajaVideos = null || document.querySelector('#content')

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options) 
    const data = await response.json()
    return data;
}

(async () => {
  try{
    let videos = await fetchData(API)
    let view = `
    ${videos.items.map(video => `
      <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
          </h3>
        </div>
      </div>
    `).slice(0,6).join('')}
    `;
    cajaVideos.innerHTML = view;
  }catch(error){
    console.error(error);
  }
})()
