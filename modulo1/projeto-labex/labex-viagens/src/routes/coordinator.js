export const goToHomePage = (navigate) => {
    navigate('/')
}   

export const goToListTripsPage = (navigate) => {
    navigate('/trips')
}

export const GoToApplicationFormPage = (navigate) => {
    navigate('/trips/application')
}

export const GoToLoginPage = (navigate) => {
    navigate('/login')
}

export const GoToAdminHomePage = (navigate) => {
    navigate('/admin/trips/list')
}

export const goToCreateTripsPage = (navigate) => {
    navigate('/admin/trips/create')
}

export const goToTripsDetailsPage = (navigate, id) => {
    navigate(`/admin/trips/${id}`)
}



