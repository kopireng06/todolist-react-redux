const addList = 'addList';
const delList = 'delList';
const addListAsync = 'addListAsync';
const changeStatusList = 'changeStatusList';
const changeSearch = 'changeSearch';
const changeFilter = 'changeFilter';

export const addListCreator = (titleInput) =>{
    return {
        type:addList,
        title:titleInput
    }
}

export const delListCreator = (idInput) =>{
    return {
        type:delList,
        id:idInput
    }
}

export const changeSearchCreator = (searchInput) =>{
    return {
        type:changeSearch,
        search:searchInput
    }
}

export const changeFilterCreator = (filterInput) =>{
    return {
        type:changeFilter,
        filter:filterInput
    }
}

export const addListAsyncCreator = (dataList) =>{
    return {
        type:addListAsync,
        list:dataList
    }
}

export const changeStatusListCreator = (completedInput,idInput) =>{
    console.log(idInput);
    return {
        type:changeStatusList,
        completed:completedInput,
        id:idInput
    }
}


