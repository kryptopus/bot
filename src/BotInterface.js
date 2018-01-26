/* @flow */

/**
 * Bot
 */
export interface BotInterface
{
    /**
     * Setup
     */
    setup(services:*):void;

    /**
     * Execute the bot
     */
    execute(services:*, now:number):void;
}
