import { FC, PropsWithChildren, ReactNode } from 'react';
import classNames from 'classnames';

type MainItemProps = PropsWithChildren<{
  title: string;
  block: ReactNode;
  reverse?: boolean;
}>;

const SectionItem: FC<MainItemProps> = ({ title, children, block, reverse }) => (
  <div className="item py-4 py-md-5">
    <div className="row">
      <div className={classNames('col-12 col-md-5 mb-3 mb-md-0 align-self-center', { 'order-md-1 ps-md-5': reverse })}>
        <div className="content pe-5">
          <h3 className="heading">{title}</h3>
          <div className="desc">{children}</div>
        </div>
      </div>
      <div className="col-12 col-md-7">{block}</div>
    </div>
  </div>
);

export default SectionItem;
