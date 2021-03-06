/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import React from 'react';

import { EuiDatePicker, EuiDatePickerProps } from '@elastic/eui';
import { euiStyled } from '../../../observability/public';

export const FixedDatePicker = euiStyled(
  ({
    className,
    inputClassName,
    ...datePickerProps
  }: {
    className?: string;
    inputClassName?: string;
  } & EuiDatePickerProps) => (
    <EuiDatePicker {...datePickerProps} className={inputClassName} popperClassName={className} />
  )
)`
  z-index: 3 !important;
`;
