export interface Demands {
  id: number;
  demands_data: {
    pre: string;
    open_in: Date;
    open_by: string;
    responsible: string;
    community: string;
    release_train: string;
    squad: string;
    classification: string;
    company: string;
    focal_point_outsourcing: string;
    start_request: Date;
    end_request: Date;
    total_hours: string;
    focal_point_everis: string;
    everis_leader: string;
    executive_to_bill: string;
    pre_description: string;
    status: boolean;
  },
  allocation_data: [
    {
      are_mother: string;
      are_daughter: string;
      profile: string,
      start_allocation: Date;
      end_allocation: Date;
      planned_hours: string;
    }
  ]
}