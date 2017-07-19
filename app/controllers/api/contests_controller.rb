class Api::ContestsController < ApplicationController
  def index
    @contests = Contest.all
    render :index
  end

  def show
    @contest = Contest.find(params[:id])
    render :show
  end

  def create
    @contest = Contest.new(contest_params)
    @contest.creator_id = current_user.id
    if @contest.save
      render json: @contest
    else
      render json: @user.errors.full_messages, status: 400
    end
  end

  def destroy
  end

  private

  def contest_params
    params.require(:contest).permit(:max_contestants,
      :point_value,
      :name,
      :contest_date)
  end

end