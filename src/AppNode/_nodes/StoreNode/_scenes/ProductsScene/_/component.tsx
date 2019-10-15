import React, { Component } from 'react';
import './styles.scss';
import { Props, State, Item } from './types';
import SideMenuLayout from '../../../_components/SideMenuLayout';
import Pagination from '../../../_components/Pagination';
import ItemCard from '../_components/ItemCard';
import { api } from '../../../../../_brain/api';
import { SideMenuLayoutItem } from '../../../_components/SideMenuLayout/types';

export default class Element extends Component<Props, State> {
    state: State = {
        page: 1,
        categories: [],
        tags: [],
        items: []
    }
    seconds = 0
    interval: any = {}
    categoryClicked = (category: SideMenuLayoutItem) => {
        const categories = this.state.categories.map(x => {
            return {
                ...x,
                active: x.id === category.id
            }
        })
        this.setState({ categories }, this.getItems)
    }
    tagClicked = (tag: SideMenuLayoutItem) => {
        const tags = this.state.tags.map(x => {
            return {
                ...x,
                active: x.id === tag.id ? !x.active : x.active
            }
        })
        this.setState({ tags }, this.getItems)
    }

    componentDidMount() {
        this.getCategories()
        this.getTags()
        this.interval = setInterval(() => this.seconds++, 1000)
    }
    componentWillUnmount() {
        console.log("ceva")
        clearInterval(this.interval)
        this.props.visitPage('PRODUCTS', this.seconds)
    }
    getCategories = () => {
        api.get("/category/get-all")
            .then(res => {
                let categories = res.data.map((x: any, i: any) => {
                    return {
                        id: x._id,
                        text: x.name,
                        active: i == 0 ? true : false
                    }
                })
                this.setState({ categories }, this.getItems)
            })
            .catch(console.log)
    }
    getTags = () => {
        api.get("/tag/get-all")
            .then(res => {
                let tags = res.data.map((x: any) => {
                    return {
                        id: x._id,
                        text: x.name,
                        active: false
                    }
                })
                this.setState({ tags })
            })
            .catch(console.log)
    }

    addItem = (item: Item) => {
        this.props.addItem(item.id, 1)
        this.props.pressButton('ADAUGA_DIRECT')
    }
    viewItem = (item: Item) => {
        this.props.gotoProduct(item.id)
        this.props.pressButton('VEZI_PRODUSUL')
    }

    getItems = () => {
        const category = this.state.categories.find(x => x.active ? true : false)
        const categoryId = category ? category.id : ''
        const tagsIds = this.state.tags.filter(x => x.active ? true : false).map(x => x.id)
        api.post("/product/get-filtered", {
            perPage: 10,
            page: this.state.page,
            category: categoryId,
            tags: tagsIds
        })
            .then(res => {
                console.log(res.data)
                const items = res.data.map((x: any) => {
                    const item: Item = {
                        id: x._id,
                        title: x.producer,
                        subtitle: x.name,
                        details: x.details,
                        img: x.images[0] ? x.images[0] : '',
                        price: x.price.price + ' RON',
                        firstButton: "Vezi produsul",
                        secondButton: 'Adauga in cos',
                        onAdd: () => this.addItem(item),
                        onView: () => this.viewItem(item)
                    }
                    return item
                })
                this.setState({ items })
            })
            .catch(console.log)
    }

    render() {
        return (
            <div>
                <SideMenuLayout categories={this.state.categories} tags={this.state.tags} onTagClick={this.tagClicked} onCategoryClick={this.categoryClicked} tagsTitle="taguri" categoryTitle="categorii">
                    <div className="products-content">
                        <div className="products-wrapper">
                            <div className="row nopadding">
                                {
                                    this.state.items.map(p =>
                                        <div className="col-sm-4" key={"id_" + p.id}>
                                            <ItemCard {...p} />
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className="empty-space col-xs-b35 col-sm-b0"></div>
                    <Pagination
                        page={this.state.page}
                        onPageChange={page => this.setState({ page }, this.getItems)}
                        total={5}
                    />
                </SideMenuLayout>
            </div>
        );
    }
}