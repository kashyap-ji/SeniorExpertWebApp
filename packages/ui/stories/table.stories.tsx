import { storiesOf } from '@storybook/react';
import Table from '../table/table';
const headings1= {name: 'Name',project: 'Project',destination: 'Destination',milestone: 'Milestone',amount: 'Amount',date: 'Date Generated',invoice: 'Invoice',};
const headings2= {name: 'Name',project: 'Project',milestone: 'Milestone',date: 'Date Generated',pdf: 'PDFs',};
const rows1 = [
  { name: 'Cameron Williamson', project: 'Plant Design', destination: 'To SE', milestone: 1, amount: 8013, date: 'August 7,2017', invoice: 'Invoice A' },
  { name: 'Arlene McCoy', project: 'Web Design', destination: 'Security', milestone: 'All', amount: 2798, date: 'March 29, 2017', invoice: 'Invoice B' },
  { name: 'Kristin Watson', project: 'App Design', destination: 'Security', milestone: 'All', amount: 5045, date: 'November 7, 2017', invoice: 'Invoice C' },
  { name: 'Cody Fisher', project: 'Microsite', destination: 'To SE', milestone: 3, amount: 1784, date: 'May 20,2015', invoice: 'Invoice D' },
  { name: 'Ronald Richards', project: 'Poster', destination: 'To SE', milestone: 4, amount: 9462, date: 'November 16, 2014', invoice: 'Invoice E' },
  { name:'Jerome Bell', project: 'Video', destination: 'To SE', milestone: 0, amount: 1374, date: 'October 30, 2017', invoice: 'Invoice F' },
  { name: 'Jane Cooper', project: 'Invoice', destination: 'To SE', milestone: 0, amount: 8811, date: 'May 31,2015', invoice: 'Invoice G' },
  { name: 'Wade Warren', project: 'Invoice', destination: 'To SE', milestone: 2, amount: 1148, date: 'September 9, 2013', invoice: 'Invoice H' },
];
const rows2 = [
  { name: 'Cameron Williamson', project: 'Plant Design', milestone: 1, date: 'August 7,2017', pdf: 'Invoice A' },
  { name: 'Arlene McCoy', project: 'Web Design', milestone: 5, date: 'March 29, 2017', pdf: 'Invoice B' },
  { name: 'Kristin Watson', project: 'App Design', milestone: 5, date: 'November 7, 2017', pdf: 'Invoice C' },
  { name: 'Cody Fisher', project: 'Microsite', milestone: 3, date: 'May 20,2015', pdf: 'Invoice D' },
  { name: 'Ronald Richards', project: 'Poster', milestone: 4, date: 'November 16, 2014', pdf: 'Invoice E' },
  { name:'Jerome Bell', project: 'Video', milestone: 0, date: 'October 30, 2017', pdf: 'Invoice F' },
  { name: 'Jane Cooper', project: 'Invoice', milestone: 0, date: 'May 31,2015', pdf: 'Invoice G' },
  { name: 'Wade Warren', project: 'Invoice', milestone: 2, date: 'September 9, 2013', pdf: 'Invoice H' },
];
const width1 = '184px';
const width2='260px';
  const heightRow = '34px';
  const heightCol = '74px';
  const fontSizeRow = '16px';
  const fontSizeCol = '20px';
storiesOf('Table', module).add('Table1', () => (
  <Table
    headings={headings1}
    rows={rows1}
    heightrow={heightRow}
    heightcol={heightCol}
    width={width1}
    fontSizerow={fontSizeRow}
    fontSizecol={fontSizeCol}
    gap="10px"
    />
));
storiesOf('Table', module).add('Table2', () => (
  <Table
    headings={headings2}
    rows={rows2}
    heightrow={heightRow}
    heightcol={heightCol}
    width={width2}
    fontSizerow={fontSizeRow}
    fontSizecol={fontSizeCol}
    gap="10px"
  />
));
