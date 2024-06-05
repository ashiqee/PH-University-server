const { Query,FilterQuery } = require("mongoose");

class QueryBuilder<T>{
    public modelQuery : Query<T[],T>;
    public query : Record<String,unknown>;

    constructor(modelQuery: Query<T[],T> query: Record<String, unknown){
        this.modelQuery = modelQuery;
        this.query =query;
    }

    search(searchableFields: string[]){
        if(this?.query?.searchTerm){
            this.model = this.modelQuery.find({
                $or:searchableFields.map((field)=>({
                    [field]:{$regex: searchTerm, $options: 'i'}
                  }) as FilterQuery<T>)
            })
        }
        return this;
    }

   

}