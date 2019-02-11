import { Document, SchemaOptions } from 'mongoose'
import { ApiModelPropertyOptional } from '@nestjs/swagger';


export interface IBaseModel extends Document {
    createdAt?: Date
    updateAt?: Date
}

export class BaseModel {
    @ApiModelPropertyOptional({ type: String, format: 'date-time' })
    createdAt?: Date

    @ApiModelPropertyOptional({ type: String, format: 'date-time' })
    updateAt?: Date

    @ApiModelPropertyOptional()
    id?: string
}

export const schemaOptions: SchemaOptions = {
    toJSON: {
        virtuals: true,
        getters: true
    }
}