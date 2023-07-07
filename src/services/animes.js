import {apiClient} from '../client/apiClient'

const getAnimes = () => apiClient.get({url: '/animes'}).then(handleResponse).then(animes => animes)
const getAnime = animeId => apiClient.get({url: `/anime/${animeId}`}).then(handleResponse).then(anime => anime)
const addAnime = anime => apiClient.post({url: '/animes', body: {...anime}}).then(handleResponse).then(anime => anime)
const editAnime = anime => apiClient.put({url: `/animes/${anime.id}`, body: {...anime}}).then(handleResponse).then(anime => anime)
const deleteAnime = animeId => apiClient.delete({url: `/anime/${animeId}`}).then(handleResponse).then(anime => anime)

const handleResponse = response => response.text().then(text => {
    const data = text && JSON.parse(text)
    if (!response.ok) {
        const error = (data && data.message) || response.statusText
        return error
    }
    return data

})

export default animesServices = {
    getAnimes,
    getAnime,
    addAnime,
    editAnime,
    deleteAnime,
}