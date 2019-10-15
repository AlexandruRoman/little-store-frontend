export interface OwnProps {
    categories?: SideMenuLayoutItem[]
    categoryTitle?: string
    tags?: SideMenuLayoutItem[]
    tagsTitle?: string
    onCategoryClick?: (category: SideMenuLayoutItem) => void
    onTagClick?: (tag: SideMenuLayoutItem) => void
}

export interface StateProps {
}

export interface DispatchProps {
}

export type Props = StateProps & DispatchProps & OwnProps

export interface State {
}


//=====================

export interface SideMenuLayoutItem {
    id: string
    text: string
    active?: boolean
    action?: (item: SideMenuLayoutItem) => void
}