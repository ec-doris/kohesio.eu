import {Deserializable} from "./deserializable.model";
import {environment} from "../../../environments/environment";

export class Beneficiary implements Deserializable{

    budget: number;
    cofinancingRate: number;
    country: string;
    countryCode: string;
    euBudget: number;
    id: number;
    label: string;
    link: string;
    numberProjects: number;


    deserialize(input: any): this {
        return Object.assign(this, {
            budget: input.budget,
            cofinancingRate: input.cofinancingRate,
            country: input.country,
            countryCode: input.countryCode,
            euBudget: input.euBudget,
            id: input.id.replace(environment.entityURL,""),
            label: input.label,
            link: input.link,
            numberProjects: input.numberProjects
        });
    }
}
