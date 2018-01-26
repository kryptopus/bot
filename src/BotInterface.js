/* @flow */
import type {ServiceContainerInterface} from "./ServiceContainerInterface"

/**
 * Bot
 */
export interface BotInterface
{
    /**
     * Setup
     *
     * @param   {ServiceContainerInterface} services    Services
     */
    setup(services:ServiceContainerInterface):void | Promise<void>;

    /**
     * Execute the bot
     *
     * @param   {ServiceContainerInterface} services    Services
     * @param   {number}                    now         Current timestamp
     */
    execute(services:*, now:number):void | Promise<void>;
}
