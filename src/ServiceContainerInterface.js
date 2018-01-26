/**
 * Service container
 */
export interface ServiceContainerInterface
{
    /**
     * Get service instance
     *
     * @return  {*}     Service instance
     */
    get(id:string):* | Promise<*>;
}
