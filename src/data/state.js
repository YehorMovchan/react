

let store = {
    _state: {
        messagePage: {
            messagesItemObject: [
                { name: 'Person1', id: 1 },
                { name: 'Person2', id: 2 },
                { name: 'Person3', id: 3 },
                { name: 'Person4', id: 4 },
            ],
            fieldItemObject: [
                { id: 1, sender: 'me', value: 'Hello', avatar: "https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg" },
                { id: 2, sender: 'me', value: 'I`m go away home', avatar: "https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg" },
                { id: 3, sender: 'someone', value: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti nisi officia reprehenderit maxime facilis eaque consequuntur labore minima a eum?', avatar: "https://static.independent.co.uk/2021/12/07/10/PRI213893584.jpg?quality=75&width=982&height=726&auto=webp" },
                { id: 4, sender: 'someone', value: 'Okey, I will wait for you', avatar: "https://static.independent.co.uk/2021/12/07/10/PRI213893584.jpg?quality=75&width=982&height=726&auto=webp" }
            ]
        },
        profilePage: {
            postsObject: [
                { id: 1, text: 'lorem', likes: 15, dislikes: 2 },
                { id: 2, text: 'Hey', likes: 5, dislikes: 20 },
                { id: 3, text: 'wassup?', likes: 45, dislikes: 11 }
            ]
        }
    },
    _callsubscriber() {
    },
    getState() {
        return this._state;
    },
    _addNewPost(textPost) {
        let post = {
            id: 4,
            text: textPost,
            likes: 0,
            dislikes: 0
        }
        this._state.profilePage.postsObject.push(post);
        this._callsubscriber(this._state);
    },
    _addNewMessage(text) {
        let message = {
            id: 5,
            sender: 'me',
            value: text,
            avatar: "https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg"
        }
        this._state.messagePage.fieldItemObject.push(message);
        this._callsubscriber(this._state);
    },
    subscribe(observer) {
        this._callsubscriber = observer;
    },
    dispatch(action) {
        switch (action.type) {
            case 'ADD-NEW-POST':
                this._addNewPost(action.text);
                break;
            case 'ADD-NEW-MESSAGE':
                this._addNewMessage(action.text);
                break;
            default:
                console.warn(`Action ${action.type} is not exist`);
                break;
        }
    }
};

export const addNewPostActionCreator = (text) => {
    return {
        type: 'ADD-NEW-POST',
        text: text
    }
}

export const addNewMessageActionCreator = (text) => {
    return {
        type: 'ADD-NEW-MESSAGE',
        text: text
    }
}



export default store;