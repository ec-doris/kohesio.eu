import {Deserializable} from "./deserializable.model";

export class FiltersApi implements Deserializable{

    public thematic_objectives: [];
    public policy_objective: [];
    public funds: [];
    public programs: [];
    public categoriesOfIntervention: [];
    public regions: [];


    //Static
    public countries: any[];
    public programmingPeriods: any[];
    public totalProjectBudget: any[];
    public amountEUSupport: any[];
    public sort: any[];
    public sortBeneficiaries: any[];

    protected static SInit = (() => {
        FiltersApi.prototype.countries = [{
                id:"Q12",
                value:"Denmark"
            },{
                id: "Q13",
                value:"Poland"
            },{
                id:"Q15",
                value:"Italy"
            },{
                id:"Q2",
                value:"Ireland"
            },{
                id:"Q20",
                value:"France"
            },{
                id:"Q25",
                value:"Czechia"
        }];
        FiltersApi.prototype.programmingPeriods = [{
            id: '2014-2020',
            value: '2014 - 2020',
        },{
            id: '2021-2027',
            value: '2021 - 2027',
        }];
        FiltersApi.prototype.totalProjectBudget = [{
            id: '0-1000',
            value: '0 - 1 000',
        },{
            id: '1000-10000',
            value: '1 000 - 10 000',
        },{
            id: '10000-100000',
            value: '10 000 - 100 000',
        },{
            id: '100000-1000000',
            value: '100 000 - 1 000 000',
        },{
            id: '1000000-10000000',
            value: '1 000 000 - 10 000 000',
        },{
            id: '10000000-100000000',
            value: '10 000 000 - 100 000 000',
        },{
            id: '100000000-1000000000',
            value: '100 000 000 - 1 000 000 000',
        },{
            id: '1000000000-10000000000',
            value: '1 000 000 000 - 10 000 000 000'
        }];
        FiltersApi.prototype.amountEUSupport = FiltersApi.prototype.totalProjectBudget;
        FiltersApi.prototype.sort = [{
            id: 'orderStartDate-true',
            value: 'Start Date (ascending)'
        },{
            id: 'orderStartDate-false',
            value: 'Start Date (descending)'
        },{
           id: 'orderEndDate-true',
           value: 'End Date (ascending)'
        },{
            id: 'orderEndDate-false',
            value: 'End Date (descending)'
        },{
            id: 'orderEuBudget-true',
            value: 'EU Contribution (ascending)'
        },{
            id: 'orderEuBudget-false',
            value: 'EU Contribution (descending)'
        }];
        FiltersApi.prototype.sortBeneficiaries = [{
            id: 'orderNumProjects-true',
            value: 'Number of Projects (ascending)'
        },{
            id: 'orderNumProjects-false',
            value: 'Number of Projects (descending)'
        },{
            id: 'orderEuBudget-true',
            value: 'EU Contribution (ascending)'
        },{
            id: 'orderEuBudget-false',
            value: 'EU Contribution (descending)'
        },{
            id: 'orderTotalBudget-true',
            value: 'Total Budget (ascending)'
        },{
            id: 'orderTotalBudget-false',
            value: 'Total Budget (descending)'
        }];
    })();

    deserialize(input: any): this {
        return Object.assign(this, {
            thematic_objectives : this.themes(input.thematic_objectives),
            policy_objective: input.policy_objective,
            funds: input.funds,
            programs: input.programs,
            categoriesOfIntervention: input.categoriesOfIntervention,
            countries: this.countries,
            programmingPeriods: this.programmingPeriods,
            totalProjectBudget: this.totalProjectBudget,
            amountEUSupport: this.amountEUSupport
        });
    }

    private themes(themes){
        if (themes) {
            let i = 1;
            themes.forEach(theme => {
                theme["pk"] = "TO" + String(i).padStart(2, '0');
                ++i;
            })
        }
        return themes;
    }

}
