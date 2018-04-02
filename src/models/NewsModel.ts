import CategoryModel from './CategoryModel';
import SourceModel from './SourceModel';
interface AdditinalModel {
    favorite_count: number;
    image: string;
    name: string;
    retweet_count: number;
}

export default interface NewsModel {
    id: number;
    additional: AdditinalModel | null;
    categories: CategoryModel[];
    comments: any[];
    comments_count: number;
    created_at: string;
    description: string;
    favorites_count: number;
    is_favorited: number;
    link: string;
    posted_date: string;
    posted_date_formated: string;
    priority: boolean | null;
    source: SourceModel;
    source_id: number;
    thumbnail: string;
    title: string;
    updated_at: string;
}