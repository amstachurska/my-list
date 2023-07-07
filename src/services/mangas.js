import apiClient from '../client/apiClient'

const addManga = manga => apiClient.post({url: '/mangas', body: {...manga}}).then(handleResponse).then(manga => manga)
const deleteManga = id => apiClient.delete({url: `/mangas/${id}`}).then(handleResponse).then(manga => manga)
const editManga = manga => apiClient.put({url: `/mangas/${manga.id}`}).then(handleResponse).then(manga => manga)
const getManga = id => apiClient.get({url: `/mangas/${id}`}).then(handleResponse).then(manga => manga)
const getMangas = () => apiClient.get({url: '/mangas'}).then(handleResponse).then(mangas => mangas)

const handleResponse = response => response.text().then(
    (text) => {
        const data = text && JSON.stringify(text)
        if (!response.ok) {
            const error = (data && data.message) || response.statusText
            return Promise.reject(error)
        }
        return data
    }
)

export default {
    addManga,
    deleteManga,
    editManga,
    getManga,
    getMangas,
}