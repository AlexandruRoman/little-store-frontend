import React, { Component } from 'react';
import './styles.scss';
import { Props, State, SideMenuLayoutItem } from './types';

export default class Element extends Component<Props, State> {
    categoryClicked = (x: SideMenuLayoutItem) => {
        if (x.action)
            x.action(x)
        if (this.props.onCategoryClick)
            this.props.onCategoryClick(x)
    }
    tagClicked = (x: SideMenuLayoutItem) => {
        if (x.action)
            x.action(x)
        if (this.props.onTagClick)
            this.props.onTagClick(x)
    }
    render() {
        return (
            <div className="side-menu-layout">

                <div className="row">
                    <div className="col-md-9 col-md-push-3">{this.props.children}</div>
                    <div className="col-md-3 col-md-pull-9">
                        {
                            this.props.categoryTitle ? <div>

                                <div className="h4 col-xs-b10">{this.props.categoryTitle}</div>
                                <ul className="categories-menu transparent">
                                    {
                                        this.props.categories ? this.props.categories.map(x =>
                                            <li key={"id_" + x.id} onClick={() => this.categoryClicked(x)}>
                                                <a className={x.active ? 'active' : ''}>{x.text}</a>
                                            </li>) : ''
                                    }
                                </ul>
                            </div> : ''
                        }

                        <div className="empty-space col-xs-b25 col-sm-b50"></div>
                        {
                            this.props.tagsTitle ? <div>
                                <div className="h4 col-xs-b25">Taguri</div>
                                <div className="tags light clearfix">
                                    {
                                        this.props.tags ? this.props.tags.map(x =>
                                            <a onClick={() => this.tagClicked(x)} className={x.active ? 'tag active' : 'tag'} key={"id_" + x.id}>{x.text}</a>
                                        ) : ''
                                    }
                                </div>
                            </div> : ''
                        }

                    </div>
                </div>
            </div>
        );
    }
}