export class ArticleModel {
    title
    description
    imagePath

    constructor(
        title,
        description,
        imagePath
    ) {
        this.title = title
        this.description = description
        this.imagePath = imagePath
    }
}