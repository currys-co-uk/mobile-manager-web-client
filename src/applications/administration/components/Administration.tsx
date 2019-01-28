import * as React from 'react';
import { Breadcrumb } from "../../../_shared/components/Breadcrumb";
import { Configuration } from '../containers/Configuration';

export class Administration extends React.PureComponent {

  public render(): JSX.Element {
    return (
      <>
        <Breadcrumb
          title={'Administration'}
        />
        <div className="administration">
          <Configuration />
        </div>
      </>
    );
  }
}
