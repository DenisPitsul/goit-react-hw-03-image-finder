import axios from 'axios'

export async function getImages(searchText, page) {
    const params = new URLSearchParams({
        key: '40473065-d94a4da65e151d585b80ae75d',
        q: searchText,
        image_type: 'photo',
        orientation: 'horizontal',
        page: page,
        per_page: '12'
    })
    const response = await axios.get(`https://pixabay.com/api/?${params}`)
    return response;
}