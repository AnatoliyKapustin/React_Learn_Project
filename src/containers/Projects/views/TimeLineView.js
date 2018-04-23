import React, {Component} from "react";
import {Col} from "react-bootstrap";

import ProjectsView from "../../../components/projects/ProjectsView";
import ProjectsFilters from "../../../components/projects/ProjectsFilters";
import style from "../css/style.css";
import moment from "moment";

import Timeline from 'react-calendar-timeline/lib';
import { defaultHeaderLabelFormats, defaultSubHeaderLabelFormats } from 'react-calendar-timeline/lib'

import timelineStyles from "../css/timelineView.css";
import {issuesWithStatus} from "../../../helpers/dateFilter";

class TimeLineView extends Component {

    onItemClick= (item) => {
        console.log("Clicked: " + item);
    };

    onItemSelect = (item) => {
        console.log("Selected: " + item);
    };

    onItemContextMenu =(item) => {
        console.log("Context Menu: " + item);
    };

    onTimeChange = (visibleTimeStart, visibleTimeEnd) => {
        if (visibleTimeStart < minTime && visibleTimeEnd > maxTime) {
            this.updateScrollCanvas(minTime, maxTime)
        } else if (visibleTimeStart < minTime) {
            this.updateScrollCanvas(minTime, minTime + (visibleTimeEnd - visibleTimeStart))
        } else if (visibleTimeEnd > maxTime) {
            this.updateScrollCanvas(maxTime - (visibleTimeEnd - visibleTimeStart), maxTime)
        } else {
            this.updateScrollCanvas(visibleTimeStart, visibleTimeEnd)
        }
    };

    itemRenderer = ({item}) => {
        return (<div>
            <span style={{fontWeight: 600}}>Hack:</span>
            <span className={timelineStyles["item-label"]}>{item.title}</span>
        </div>)
    }

    render() {

        const usHeaderLabelFormats = Object.assign({}, defaultSubHeaderLabelFormats, {
            yearShort: 'YY',
            yearLong: 'YYYY',
            monthShort: 'MM/YY',
            monthMedium: 'MM/YYYY',
            monthMediumLong: 'MMM YYYY',
            monthLong: 'MMMM YYYY',
            dayShort: 'L',
            dayLong: 'dddd, LL',
            hourShort: 'HH',
            hourMedium: 'HH:00',
            hourMediumLong: 'L, HH:00',
            hourLong: 'dddd, LL, HH:00',
            time: 'LLL'
        });

        const usSubHeaderLabelFormats = Object.assign({}, defaultSubHeaderLabelFormats, {
            yearShort: 'YY',
            yearLong: 'YYYY',
            monthShort: 'MM',
            monthMedium: 'MMM',
            monthLong: 'MMMM',
            dayShort: 'D',
            dayMedium: 'dd D',
            dayMediumLong: 'ddd, Do',
            dayLong: 'dddd, Do',
            hourShort: 'HH',
            hourLong: 'HH:00',
            minuteShort: 'mm',
            minuteLong: 'HH:mm'
        });

        let {
            basePath,
            selectedKey,
            headerText,
            issues,
            statusFilter
        } = this.props;

        if (statusFilter) {
            issues = issuesWithStatus(issues, statusFilter);
        }

        issues = issues.filter(issue => issue.startDate && issue.endDate)
            .sort((i1, i2) => moment(i1.startDate).diff(moment(i2.startDate)));
        // projects = projects.filter(project => project.startDate && project.startDate)
        //     .sort((p1, p2) => moment(p1.startDate).diff(moment(p2.startDate)));

        const groups = [
            {id: 1},
            {id: 2},
            {id: 3},
            {id: 4},
            {id: 5},
            {id: 6},
            {id: 7},
            {id: 8},
            {id: 9},
            {id: 10},
        ];

        const items = [
            {id: 1, group:1, title: 'item 1', start_time: moment(), end_time: moment().add(7, 'days') , className: timelineStyles.item},
            {id: 2, group:2, title: 'item 2', start_time: moment().add(2, 'days'), end_time: moment().add(0.5, 'hour'), className: timelineStyles.item},
            {id: 3, group:3, title: 'item 3', start_time: moment().add(22, 'hour'), end_time: moment().add(3, 'hour'), className: timelineStyles.item}
        ];


        let minTime = moment().add(-7, 'days').valueOf();
        let maxTime = moment().add(7, 'days').valueOf();

        return (
            <Col sm={10} className={`${style.mainContainer} ${style.fullHeight}`}>
                <Col sm={12} className={` ${style.projectsContainer} ${style.fullHeight}`}>
                    <div className={` ${style.background} ${style.fullHeight}`}>
                        <div className={style.mainHeader}>
                            {headerText ? headerText : "Проекты"}
                        </div>
                        <ProjectsView basePath={basePath}
                                      selectedMenuItem={selectedKey}/>
                        <ProjectsFilters textBeforeFilter={"ПОКАЗАТЬ"}/>
                        <Timeline headerLabelFormats={usHeaderLabelFormats}
                                  subHeaderLabelFormats={usSubHeaderLabelFormats}
                                  groups={groups}
                                  fullUpdate={true}
                                  items={items}
                                  itemsSorted
                                  itemTouchSendsClick={false}
                                  canMove={false}
                                  canResize={false}
                                  itemRenderer={this.itemRenderer}
                                  visibleTimeStart ={minTime}
                                  visibleTimeEnd={maxTime}
                                  timeSteps={{second: 1,
                                      minute: 1,
                                      hour: 1,
                                      day: 1,
                                      month: 1,
                                      year: 1
                                  }}
                        />
                    </div>
                </Col>
            </Col>
        )
    }

}

export default TimeLineView;