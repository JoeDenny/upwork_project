export default interface SourceModel {
    id: number;
    created_at: string | null;
    dump_date: string;
    group_id: number | null;
    link: string;
    logo: string;
    logo_path: string;
    team_id: number | null;
    title: string;
    type: string;
    updated_at: string;
    user_entered: number;
}