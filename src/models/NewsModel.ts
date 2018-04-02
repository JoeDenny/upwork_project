export default interface NewsModel {
    id: number;
    title: string;
    description: string;
    link: string;
    thumbnail: string;
    posted_date: Date;
    categories: string[];
    source_id: number;
}