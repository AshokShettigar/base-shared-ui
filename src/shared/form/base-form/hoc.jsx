import React, { PureComponent } from 'react';
import { func, string } from 'prop-types';
import { withFormik } from 'formik';
import { last, get } from 'lodash';

import { SELECTED_FIELD } from './constants';
import { createValidator, parseFormModel } from './utils';

const withForm = ({ initialValues, validationSchema, ...formikProps }) => Form => {
    class WrappedForm extends PureComponent {
        static propTypes = {
            id: string.isRequired,
            handleSubmit: func.isRequired
        };

        getField = form => field => ({
            name: field,
            value: this.getFieldValue(form)(field),
            error: this.getFieldError(form)(field)
        });

        getFieldValue = form => field => get(form.values, field);

        getFieldError = form => field => get(form.errors, field, null);

        isClickedSubmit = false;

        shouldShow = form => (field, value) => this.getFieldValue(form)(field) === value;

        destroyForm = form => field => {
            form.setErrors();
            form.setFieldValue(field, get(form.initialValues, field, {}), false);
        };

        handleChange = form => (name, value) => {
            const isNested = last(name.split('.')) === SELECTED_FIELD;
            const shouldValidate = !isNested && this.isClickedSubmit;

            form.setFieldValue(name, value, shouldValidate);
            form.setFieldTouched(name, true, shouldValidate);
        };

        handleSubmit = e => {
            e.preventDefault();

            this.isClickedSubmit = true;

            return this.props.handleSubmit(e);
        };

        render() {
            return (
                <Form
                    {...this.props}
                    onSubmit={this.handleSubmit}
                    getField={this.getField(this.props)}
                    shouldShow={this.shouldShow(this.props)}
                    destroyForm={this.destroyForm(this.props)}
                    getFieldValue={this.getFieldValue(this.props)}
                    getFieldError={this.getFieldError(this.props)}
                    onChange={this.handleChange(this.props)}
                />
            );
        }
    }

    return withFormik({
        ...formikProps,
        validate: (values, props) => createValidator(props.validationSchema || validationSchema)(values),
        handleSubmit: (values, formikBag) => formikBag.props.onSubmit(parseFormModel(values), formikBag),
        mapPropsToValues: props => props.initialValues || initialValues
    })(WrappedForm);
};

withForm.SELECTED_FIELD = SELECTED_FIELD;

export default withForm;
