package com.hexaware.FTP113.model;

import com.hexaware.FTP113.persistence.DbConnection;
import com.hexaware.FTP113.persistence.LeaveDetailsDAO;

import java.util.Objects;
import java.util.List;
import java.util.Date;



/**
 * LeaveDetails class to store employee's leave details.
 * @author hexware
 */
public class LeaveDetails {

  /**
   * leaId to store employee's leave id.
   * leaEmpId to store employee id.
   * leaNumberOfDays store leave days.
   * leaStartDate store employee's leave start date.
   * leaEndDate store employee's leave end date.
   * leaLeaveType store employee leave type.
   * leaStatus store employee leave status.
   * leaReason store employee leave reason.
   * leaAppliedOn store employee leave applied on.
   * leaManagerComment store employee manager comments.
   */
  private int leaId;
  private int leaEmpId;
  private int leaNumberOfDay;
  private Date leaStartDate;
  private Date leaEndDate;
  private LeaveType leaLeaveType;
  private LeaveStatus leaStatus;
  private String leaReason;
  private Date leaAppliedOn;
  private String leaManagerComment;

  @Override
  public final boolean equals(final Object obj) {
    if (obj == null) {
      return false;
    }
    if (getClass() != obj.getClass()) {
      return false;
    }
    LeaveDetails lea = (LeaveDetails) obj;
    if (Objects.equals(leaId, lea.leaId)) {
      return true;
    }
    return false;
  }
  @Override
  public final int hashCode() {
    return Objects.hash(leaId);
  }
  @Override
  public final String toString() {
    return "LeaveId: " + leaId + " Employee id: " + leaEmpId + " No of leave days: "
             + leaNumberOfDay + " Start Day of Leave: " + leaStartDate + " End Day of Leave: "
             + leaStartDate + "Leave End Date: " + leaEndDate + " Leave Type: "
             + leaLeaveType + " Leave Status " + leaStatus + " Reason for leave: "
             + leaReason + " Leave Applied On: " + leaAppliedOn + " Manager Comment: "
             + leaManagerComment;
  }
  /**
   * @param argLeaId to initialize employee's leave id.
   * @param argLeaEmpId to initialize employee id.
   * @param argLeaNumberOfDay to initialize leave days.
   * @param argLeaStartDate to initialize leave start date.
   * @param argLeaEndDate to initialize leave end date.
   * @param argLeaLeaveType to initialize leave type.
   * @param argLeaStatus to initialize leave Status.
   * @param argLeaReason to initialize leave reason.
   * @param argLeaAppliedOn to initialize leave applied on.
   * @param argLeaManagerComment to initialize manager comments.
   */
  public LeaveDetails(final int argLeaId, final int argLeaEmpId, final int argLeaNumberOfDay,
                  final Date argLeaStartDate, final Date argLeaEndDate,
                  final LeaveType argLeaLeaveType, final LeaveStatus argLeaStatus, final String argLeaReason,
                  final Date argLeaAppliedOn, final String argLeaManagerComment) {
    this.leaId = argLeaId;
    this.leaEmpId = argLeaEmpId;
    this.leaNumberOfDay = argLeaNumberOfDay;
    this.leaStartDate = argLeaStartDate;
    this.leaEndDate = argLeaEndDate;
    this.leaLeaveType = argLeaLeaveType;
    this.leaStatus = argLeaStatus;
    this.leaReason = argLeaReason;
    this.leaAppliedOn = argLeaAppliedOn;
    this.leaManagerComment = argLeaManagerComment;
  }

/**
   * Gets the LeaId.
   * @return this Employee's leave id.
   */
  public final int getLeaId() {
    return leaId;
  }

  /**
   *
   * @param argLeaId to set employee leave id.
   */
  public final void setLeaId(final int argLeaId) {
    this.leaId = argLeaId;

  }

  /**
   * Gets the EmpId.
   * @return this Employee's ID.
   */
  public final int getLeaEmpId() {
    return leaEmpId;
  }

  /**
   *
   * @param argEmpId to set employee id.
   */
  public final void setEmpId(final int argEmpId) {
    this.leaEmpId = argEmpId;

  }

  /**
   * Gets the LeaNumberOfDay.
   * @return this Employee's leave days.
   */
  public final int getLeaNumberOfDay() {
    return leaNumberOfDay;
  }

  /**
   *
   * @param argLeaNumberOfDay to set employee leave NumberOfDay.
   */
  public final void setLeaNumberOfDay(final int argLeaNumberOfDay) {
    this.leaNumberOfDay = argLeaNumberOfDay;
  }

  /**
   * Gets the LeaStartDate.
   * @return this Employee's Leave Start date.
   */
  public final Date getLeaStartDate() {
    return leaStartDate;
  }

  /**
   *
   * @param argLeaStartDate to set employee leave start date.
   */
  public final void setLeaStartDate(final Date argLeaStartDate) {
    this.leaStartDate = argLeaStartDate;
  }
  /**
   * Gets the LeaEndDate.
   * @return this Employee's Leave End date.
   */
  public final Date getLeaEndDate() {
    return leaEndDate;
  }

  /**
   *
   * @param argLeaEndDate to set employee leave End date.
   */
  public final void setLeaEndDate(final Date argLeaEndDate) {
    this.leaEndDate = argLeaEndDate;
  }

  /**
   * Gets the LeaLeaveType.
   * @return this Employee's leave Type.
   */
  public final LeaveType getLeaLeaveType() {
    return leaLeaveType;
  }

  /**
   *
   * @param argLeaLeaveType to set employee leave Type.
   */
  public final void setLeaLeaveType(final LeaveType argLeaLeaveType) {
    this.leaLeaveType = argLeaLeaveType;
  }

  /**
   * Gets the LeaLeaveStatus.
   * @return this Employee's leave Status.
   */
  public final LeaveStatus getLeaStatus() {
    return leaStatus;
  }

  /**
   * @param argLeaStatus to set employee leave Status.
    */
  public final void setLeaStatus(final LeaveStatus argLeaStatus) {
    this.leaStatus = argLeaStatus;
  }

  /**
   * Gets the LeaReason.
   * @return this Employee's leave reason.
   */
  public final String getLeaReason() {
    return leaReason;
  }

  /**
   *
   * @param argLeaReason to set employee leave reason.
   */
  public final void setLeaReason(final String argLeaReason) {
    this.leaReason = argLeaReason;
  }

  /**
   * Gets the LeaAppliedOn.
   * @return this Employee's Leave Applied On.
   */
  public final Date getLeaAppliedOn() {
    return leaAppliedOn;
  }

  /**
   *
   * @param argLeaAppliedOn to set employee leave applied on.
   */
  public final void setLeaAppliedOn(final Date argLeaAppliedOn) {
    this.leaAppliedOn = argLeaAppliedOn;
  }

  /**
   * Gets the LeaManagerComment.
   * @return this Employee's leave Manager Comments.
   */
  public final String getLeaManagerComment() {
    return leaManagerComment;
  }

  /**
   *
   * @param argLeaManagerComment to set employee leave manager comment.
   */
  public final void setLeaManagerComment(final String argLeaManagerComment) {
    this.leaManagerComment = argLeaManagerComment;
  }

  /**
   * The dao for LeaveDetails.
   */
  private static LeaveDetailsDAO dao() {
    DbConnection db = new DbConnection();
    return db.getConnect().onDemand(LeaveDetailsDAO.class);
  }

  /**
   * list all Leave details.
   * @return all Leave details
   */
  public static LeaveDetails[] listAll() {

    List<LeaveDetails> ls = dao().list();
    return ls.toArray(new LeaveDetails[ls.size()]);
  }

  /**
   * list LeaveDetails details by leaveid.
   * @param leaID id to get employee leave details.
   * @return Leave_Details
   */
  public static LeaveDetails listById(final int leaID) {
    return dao().find(leaID);
  }

}
