export interface HomeGrid {
    title: string,
    is_new: boolean,
    icon: string,
    type: string,
    options: Array<{
        image_url: string,
        label: string,
        subtitle: string,
        icon: string,
    }>
}