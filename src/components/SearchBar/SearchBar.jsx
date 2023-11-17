import { Component } from 'react';
import classes from './SearchBar.module.css'
import { Field, Form, Formik } from 'formik';

export class SearchBar extends Component {

    render() {
        const {onSearchSubmit} = this.props

        return (
            <header className={classes.Header}>
                <Formik
                    initialValues={{
                        searchText: ''
                    }}
                    onSubmit={(values, actions) => {
                        onSearchSubmit(values.searchText)
                        actions.resetForm()
                    }}
                >
                    <Form className={classes.SearchForm}>
                        <Field
                            type="text"
                            name='searchText'
                            required
                            placeholder="Search images and photos"
                            className={classes.SearchFormInput}
                        />
                        <button type="submit" className={classes.SearchFormButton}>Search</button>
                    </Form>
                </Formik>
            </header>
        )
    }
}