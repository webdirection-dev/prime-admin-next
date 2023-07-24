export const authForm = {
    name: {
        name: 'name',
        options: {
            required: 'Please enter name'
        }
    },
    email: {
        name: 'email',
        options: {
            required: 'Please enter email',
            pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                message: "Please enter valid email"
            }
        }
    },
    password: {
        name: 'password',
        options: {
            required: 'Please enter password',
            minLength: {
                value: 3,
                message: 'Password must be more than 3 characters long'
            }
        }
    }
}

export const updateForm = {
    name: {
        name: 'name',
        options: {
            minLength: {
                value: 2,
                message: 'Name must be more than 2 characters long'
            }
        }
    },
    email: {
        name: 'email',
        options: {

            pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                message: "Please enter valid email"
            }
        }
    },
    currentPassword: {
        name: 'currentPassword',
        options: {
            required: 'Please enter your Current password',
        }
    },
    password: {
        name: 'password',
        options: {
            minLength: {
                value: 3,
                message: 'New password must be more than 3 characters long'
            }
        }
    }
}


export const setShippingForm = (name: string, nameOut: string) => (
    {
        name,
        options: {
            required: 'Please enter ' + nameOut,
            validate: () => { console.log('My filed is not valid ') }
        },
    }
)