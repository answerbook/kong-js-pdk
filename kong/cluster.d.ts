// AUTO GENERATED BASED ON Kong 2.4.x, DO NOT EDIT
// Original source path: kong/pdk/cluster.lua


export default interface cluster {


    /**
    * local id, err = kong.cluster.get_id()
    * if err then
    * -- handle error
    * end
    * if not id then
    * -- no cluster ID is available
    * end
    * -- use id here
    * @returns The v4 UUID used by this cluster as its id
    * @returns an error message
    */
    getId(): Promise<[ret_1: string, ret_2: string]>;

}
