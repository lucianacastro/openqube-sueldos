// https://insights.stackoverflow.com/survey/2018#developer-profile
export default [
    { // category
        title: 'Developer Profile',
        data: [
            { // sub-category
                title: 'Developer Roles',
                data: [
                    {  // section
                        title: 'Developer Type',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: {},
                                description: '',
                            }
                        ]
                    },
                    {
                        title: 'Contributing to Open Source',
                        data: [
                            { // tab
                                title: 'All Respondents',
                                component: 'Barh',
                                props: {},
                                description: '',
                            },
                            { // tab
                                title: 'Professional Developers',
                                component: 'Barh', // graph
                                props: {},
                                description: '',
                            }
                        ]
                    }
                ]
            }
        ]
    }
];