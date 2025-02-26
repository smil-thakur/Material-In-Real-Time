export const mat_button_types_with_desc: button_type_with_desc[] = [
    {
        "type": "Basic",
        "desc": "button with no background color, no box-shadow, has bg color on focus"
    },
    {
        "type": "Raised",
        "desc": "button with background color, box-shadow"
    },
    {
        "type": "Stroked",
        "desc": "button with background color, no box-shadow, has outline"
    },
    {
        "type": "Flat",
        "desc": "button with  background color, no box-shadow"
    },
    {
        "type": "Icon",
        "desc": "button with no background color, no box-shadow, has mat-icon in middle"
    },
    {
        "type": "FAB",
        "desc": "(Floating Action Button), button with background color, box-shadow, has mat-icon in middle"
    },
    {
        "type": "Mini FAB",
        "desc": "(Floating Action Button), button with background color, box-shadow, has mat-icon in middle and smaller in size compared to FAB"
    },
    {
        "type": "Extended FAB",
        "desc": "(Floating Action Button), button with background color, box-shadow, has mat-icon in middle and text"
    },

]

export interface button_type_with_desc {
    "type": string,
    "desc": string
}