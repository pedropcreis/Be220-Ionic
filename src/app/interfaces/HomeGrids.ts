export interface HomeGrid {
    title: string,
    is_new: boolean,
    icon: string,
    type: string,
    options: Array<{
        image_url: string,
        last_opened: boolean,
        label1: string,
        label2: string,
        subtitle: string,
        icon: string,
    }>
}